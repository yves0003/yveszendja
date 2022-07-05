import { styled } from "goober"
import React, { FC, useMemo, useEffect, useState } from "react"

import { StyledTabList, StyledTab, StyledTabPanels, StyledTabPanel, StyledTabs } from "../TabStyles"
import { ISnippet, ITabConfig, IResultTabs } from "../types"
import media from "../utils/media"
import Console from "./Console"
import Frame from "./Frame"

const TabContainer = styled(StyledTabs)`
  min-width: ${props => props.theme.container.minWidth};
  border: solid 2px rgb(1, 21, 21);
  border-radius: 0px 8px 8px 0px;
  ${media.phone} {
    border-radius: 0px 0px 8px 8px;
    width: inherit !important;
  }
`

interface IProps {
  id: string | number
  snippet: ISnippet
  defaultTab: IResultTabs
  transformJs: boolean
  presets: string[]
  width: number
}

const Result: FC<IProps> = ({ id, snippet, presets, defaultTab, transformJs, width }) => {
  const [logs, setLogs] = useState<unknown[]>([])
  const tabs: Readonly<ITabConfig<IResultTabs>[]> = useMemo(
    () => [
      { name: "Result", value: "result" as IResultTabs },
      { name: "Console", value: "console" as IResultTabs },
    ],
    []
  )
  useEffect(() => {
    function waitForMessage() {
      if (typeof window !== "undefined") {
        window.addEventListener("message", data => {
          if (data.data.source === `frame-${id}` && data.data.message.type === "log") {
            setLogs(prevLogs => [...prevLogs, ...data.data.message.data])
          }
        })
      }
    }
    waitForMessage()
  }, [id])
  return (
    <TabContainer
      defaultIndex={tabs.findIndex(tab => tab.value === defaultTab)}
      style={{ width: width }}
    >
      <StyledTabList>
        {tabs.map(tab => (
          <StyledTab key={tab.value}>{tab.name}</StyledTab>
        ))}
      </StyledTabList>
      <StyledTabPanels>
        <StyledTabPanel>
          <Frame id={id} snippet={snippet} transformJs={transformJs} presets={presets} />
        </StyledTabPanel>
        <StyledTabPanel>
          <Console logs={logs} />
        </StyledTabPanel>
      </StyledTabPanels>
    </TabContainer>
  )
}

export default Result
