import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const TextEditor = forwardRef(({ fetchData }, ref) => {

  const editorRef = useRef();

  useImperativeHandle(ref ,() => ({
    getData(){
      return editorRef.current.getData();
    }
  }));

  const onEditorReady = editor => {
    editorRef.current = editor;
  }

  return (
    <div>
      <CKEditor
        editor={ ClassicEditor }
        data="<p>Hello from CKEditor 5!</p>"
        onReady={onEditorReady}
      />
    </div>
  )
});

export default TextEditor;
