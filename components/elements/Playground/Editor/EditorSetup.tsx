import React, { FC, Fragment } from "react";
import SimpleEditor from "react-simple-code-editor";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { styled } from "goober";

import { IEditorTabs } from "../types";

const EditorWrapper = styled("div")`
  background-color: ${(props) => props.theme.editor.backgroundColor};
  color: ${(props) => props.theme.editor.color};
  overflow-y: auto !important;
  font-family: ${(props) => props.theme.editor.fontFamily};
  font-feature-settings: normal;
  height: 100%;
`;

interface IProps {
  code: string;
  language: IEditorTabs;
  onChange: (value: string, language: IEditorTabs) => void;
}

const EditorSetup: FC<IProps> = ({ code, language, onChange }) => {
  return (
    <EditorWrapper>
      <SimpleEditor
        value={code}
        onValueChange={(value: string) => onChange(value, language)}
        style={{ height: "100%" }}
        highlight={(code) => (
          <Highlight
            {...defaultProps}
            theme={theme}
            code={code}
            language={language}
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <Fragment>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </Fragment>
            )}
          </Highlight>
        )}
        padding={10}
      />
    </EditorWrapper>
  );
};

export default EditorSetup;
