import React, { FC, useMemo } from "react"
import { styled } from "goober"
import { IEditorTabs, ISnippet } from "../types"
import EditorSetup from "./EditorSetup"
import { ITabConfig } from "../types"
import { StyledTabs, StyledTabList, StyledTab, StyledTabPanels, StyledTabPanel } from "../TabStyles"
import media from "../utils/media"

const TabContainer = styled(StyledTabs)`
  min-width: ${props => props.theme.container.minWidth};
  border: solid 2px rgb(1, 21, 21);
  border-radius: 8px 0px 0px 8px;
  ${media.phone} {
    border-radius: 8px 8px 0px 0px;
    width: inherit !important;
  }
`

interface IProps {
  width: number
  code: ISnippet
  defaultTab: IEditorTabs
  onChange: (changed: string, type: IEditorTabs) => void
}

const Editor: FC<IProps> = ({ code, defaultTab, onChange, width }) => {
  const tabs: Readonly<ITabConfig<IEditorTabs>[]> = useMemo(() => {
    const tabsArr = [] as any
    if (code.markup) {
      tabsArr.push({ name: "HTML", value: "markup", code: code.markup })
    }
    if (code.css) {
      tabsArr.push({ name: "CSS", value: "css", code: code.css })
    }
    if (code.javascript) {
      tabsArr.push({ name: "JS", value: "javascript", code: code.javascript })
    }
    return tabsArr
  }, [])
  return (
    <TabContainer
      defaultIndex={tabs.findIndex(tab => tab.code && tab.value === defaultTab)}
      style={{ width: width }}
    >
      <StyledTabList>
        {tabs.map(tab => tab.code && <StyledTab key={tab.value}>{tab.name}</StyledTab>)}
      </StyledTabList>
      <StyledTabPanels>
        {tabs.map(
          tab =>
            tab.code && (
              <StyledTabPanel key={tab.value}>
                <EditorSetup code={code[tab.value]} onChange={onChange} language={tab.value} />
              </StyledTabPanel>
            )
        )}
      </StyledTabPanels>
    </TabContainer>
  )
}

export default Editor
