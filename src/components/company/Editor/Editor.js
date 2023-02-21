import { convertFromRaw, convertToRaw, EditorState } from "draft-js";

import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styles from "./editorStyle.module.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  onEditText,
  onEditTitle,
} from "../../../store/slices/companyInfoSlice";
import TextEditor from "../../textEditor/TextEditor";
const EditorComponent = ({ isTitle, data }) => {
  const dispatch = useDispatch();

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  let onEdit = isTitle ? onEditTitle : onEditText;

  useEffect(() => {
    if (data) {
      let editorData = isTitle ? data.title : data.text;
      setEditorState(EditorState.createWithContent(convertFromRaw(editorData)));
    } else {
      setEditorState(EditorState.createEmpty());
    }
  }, [data, isTitle]);

  useEffect(() => {
    let data = convertToRaw(editorState.getCurrentContent());
    dispatch(onEdit(data));
  }, [editorState, dispatch, onEdit]);

  // const blocksFromHTML = convertFromHTML(<p>html</p>);
  // const state = ContentState.createFromBlockArray(
  //   blocksFromHTML.contentBlocks,
  //   blocksFromHTML.entityMap
  // );
  // const imutable = EditorState.createWithContent(state);

  // function createMarkup(html) {
  //   return {
  //     __html: DOMPurify.sanitize(html),
  //   };
  // }

  return (
    <div>
      {/* <TextEditor /> */}
      {/* <Editor
        editorState={editorState}
        toolbarClassName={styles.toolbar}
        wrapperClassName={styles.wrapper}
        editorClassName={styles.editor}
        onEditorStateChange={(editor) => setEditorState(editor)}
        hashtag={{
          separator: " ",
          trigger: "#",
        }}
        mention={{
          separator: " ",
          trigger: "@",
          suggestions: [
            { text: "JavaScript", value: "javascript", url: "js" },
            { text: "Golang", value: "golang", url: "go" },
          ],
        }}
        toolbar={{
          options: [
            "inline",
            "blockType",
            "fontSize",
            "fontFamily",
            "list",
            "textAlign",
            "colorPicker",
            "link",
            "embedded",
            "emoji",
            "image",
            "remove",
            "history",
          ],
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true, showOpenOptionOnHover: true },
          history: { inDropdown: true },
        }}
      /> */}

      {/* <div>{parse(`${draftToHtml(infoData.text)}`)}</div> */}
    </div>
  );
};
export default EditorComponent;
