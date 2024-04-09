import React, {
  ForwardedRef,
  Fragment,
  forwardRef,
  memo,
  useImperativeHandle,
  useRef,
} from "react";
import { createStyles } from "@mantine/core";
import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Dropcursor from "@tiptap/extension-gapcursor";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
import { Color } from "@tiptap/extension-color";
import { Image, ImageOptions } from "@tiptap/extension-image";
import { IconColorPicker } from "@tabler/icons-react";
import TextStyle from "@tiptap/extension-text-style";
import FImage from "../FImage";
import { COLORS } from "../../assets/colors/colors";

interface IProps {
  label: string;
  onChange: (text: string) => void;
  content: string;
}

export interface IFRichTextEditorRef {
  resetContent: () => void;
}

const FRichTextEditor = (
  props: IProps,
  ref: ForwardedRef<IFRichTextEditorRef>
) => {
  const { classes } = styles();
  const { label, content, onChange } = props;

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Dropcursor,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TextStyle,
      Color,
      Image,

      Image.configure({
        inline: true,
        upload: async (file: File) => {
          try {
            const formData = new FormData();
            formData.append("image", file);

            // Make an HTTP POST request to your server's image upload endpoint
            const response = await fetch(
              "https://your-api-endpoint-url/upload-image",
              {
                method: "POST",
                body: formData,
              }
            );

            if (!response.ok) {
              throw new Error("Image upload failed");
            }

            const data = await response.json();
            console.log("Image upload successful. Image URL:", data.imageUrl);

            // Use the image URL returned from the server
            return { src: data.imageUrl };
          } catch (error) {
            console.error("Error uploading image:", error);
            throw error;
          }
        },
      } as unknown as ImageOptions),
    ],
    content,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        resetContent: () => editor?.commands.clearContent(),
      };
    },
    [editor]
  );

  const handleImageUpload = () => {
    if (
      editor?.isActive &&
      fileInputRef.current &&
      fileInputRef.current.files &&
      fileInputRef.current.files.length > 0
    ) {
      const file = fileInputRef.current.files[0];

      // Create a data URL from the uploaded image
      const imageUrl = URL.createObjectURL(file);

      // Insert the image into the editor with the data URL as the source
      editor.chain().setImage({ src: imageUrl, alt: "Image Alt Text" }).run();
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <Fragment>
      <label className={classes.label}>{label}</label>
      <RichTextEditor
        editor={editor}
        classNames={{ root: classes.root, toolbar: classes.toolbar }}
      >
        <RichTextEditor.Toolbar stickyOffset={60}>
          <RichTextEditor.ColorPicker
            colors={[
              "#25262b",
              "#868e96",
              "#fa5252",
              "#e64980",
              "#be4bdb",
              "#7950f2",
              "#4c6ef5",
              "#228be6",
              "#15aabf",
              "#12b886",
              "#40c057",
              "#82c91e",
              "#fab005",
              "#fd7e14",
            ]}
          />
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Control interactive={false}>
              <IconColorPicker size="1rem" stroke={1.5} />
            </RichTextEditor.Control>
            <RichTextEditor.Color color="#F03E3E" />
            <RichTextEditor.Color color="#7048E8" />
            <RichTextEditor.Color color="#1098AD" />
            <RichTextEditor.Color color="#37B24D" />
            <RichTextEditor.Color color="#F59F00" />
          </RichTextEditor.ControlsGroup>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
            <RichTextEditor.Code />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.H3 />
            <RichTextEditor.H4 />
            <RichTextEditor.H5 />
            <RichTextEditor.H6 />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Blockquote />
            <RichTextEditor.Hr />
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
            <RichTextEditor.Subscript />
            <RichTextEditor.Superscript />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Link />
            <RichTextEditor.Unlink />
            <RichTextEditor.Control interactive={false}>
              <label
                htmlFor="html"
                style={{ cursor: "pointer", display: "flex" }}
              >
                <FImage name="addImage_Icon" alt="" width={16} />
              </label>
              <input
                id="html"
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </RichTextEditor.Control>
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.AlignLeft />
            <RichTextEditor.AlignCenter />
            <RichTextEditor.AlignJustify />
            <RichTextEditor.AlignRight />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor>
    </Fragment>
  );
};

const styles = createStyles({
  root: {
    borderWidth: 1,
    borderColor: COLORS.grayDark600,

    "& .ProseMirror": {
      minHeight: 250,
    },
  },
  toolbar: {
    borderBottomColor: COLORS.grayDark600,
    borderWidth: 1,
  },
  label: {
    display: "block",
    fontSize: 12,
    fontWeight: 600,
    fontFamily: "'Public Sans', sans-serif",
    color: COLORS.grayDark600,
    marginBottom: 8,
  },
});

export default memo(forwardRef(FRichTextEditor));
