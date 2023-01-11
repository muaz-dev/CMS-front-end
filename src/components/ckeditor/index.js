import React, { Component } from "react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

// import Essentials from "@ckeditor/ckeditor5-essentials/src/ckeditor";
// import Bold from "@ckeditor/ckeditor5-basic-styles/src/ckeditor";
// import Italic from "@ckeditor/ckeditor5-basic-styles/src/ckeditor";
// import Paragraph from "@ckeditor/ckeditor5-paragraph/src/ckeditor";

const editorConfiguration = {
  toolbar: {
    items: [
      "heading",
      "|",
      "fontfamily",
      "fontsize",
      "|",
      "alignment",
      "|",
      "fontColor",
      "fontBackgroundColor",
      "|",
      "bold",
      "italic",
      "strikethrough",
      "underline",
      "subscript",
      "superscript",
      "|",
      "link",
      "|",
      "outdent",
      "indent",
      "|",
      "bulletedList",
      "numberedList",
      "todoList",
      "|",
      "code",
      "codeBlock",
      "|",
      "insertTable",
      "|",
      "uploadImage",
      "blockQuote",
      "|",
      "undo",
      "redo",
    ],
    shouldNotGroupWhenFull: true,
  },
  //   toolbar: [
  //     "bold",
  //     "italic",
  //     "link",
  //     "undo",
  //     "redo",
  //     "numberedList",
  //     "bulletedList",
  //   ],
  //   toolbar: [
  //     { name: "document", groups: ["mode", "document", "doctools"] },
  //     { name: "clipboard", groups: ["clipboard", "undo"] },
  //     {
  //       name: "editing",
  //       groups: ["find", "selection", "spellchecker", "editing"],
  //     },
  //     { name: "forms", groups: ["forms"] },
  //     "/",
  //     { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
  //     {
  //       name: "paragraph",
  //       groups: ["list", "indent", "blocks", "align", "bidi", "paragraph"],
  //     },
  //     { name: "links", groups: ["links"] },
  //     { name: "insert", groups: ["insert"] },
  //     "/",
  //     { name: "styles", groups: ["styles"] },
  //     { name: "colors", groups: ["colors"] },
  //     { name: "tools", groups: ["tools"] },
  //     { name: "others", groups: ["others"] },
  //     { name: "about", groups: ["about"] },
  //   ],
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Using CKEditor 5 from online builder in React</h2>
        <CKEditor
          editor={Editor}
          config={editorConfiguration}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
    );
  }
}

export default App;

// import React, { useRef } from "react";
// import CKEditor from "@ckeditor/ckeditor5-react";
// import Editor from "ckeditor5-custom-build/build/ckeditor";

// function MyEditor() {
//   const editorRef = useRef(null);

//   return (
//     <div>
//       <h5>Ck Editor</h5>
//       <CKEditor
//         editor={Editor}
//         data="<p>Hello from CKEditor 5!</p>"
//         onInit={(editor) => {
//           // You can store the "editor" and use it later.
//           editorRef.current = editor;
//         }}
//         onChange={(event, editor) => {
//           const data = editor.getData();
//           console.log({ event, editor, data });
//         }}
//       />
//     </div>
//   );
// }

// export default MyEditor;
