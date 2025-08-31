import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import { useState } from "react";
import { toast } from "sonner";

const CreateBlog = () => {
  const [editorContent, setEditorContent] = useState("");
  const parser = new DOMParser();
  const doc = parser.parseFromString(editorContent, "text/html");
  const description = doc.body.textContent || "";
  console.log(description);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (content: any) => {
    setEditorContent(content);
  };
  const { register, handleSubmit, reset } = useForm();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    const proseed = window.confirm(`Are you sure Create New Blog ?`);
    if (proseed) {
      const newBlog = {
        name: data.name,
        image: data.image,
        description: description,
      };
      fetch(
        "https://portfolio-server-omega-coral.vercel.app/api/blogs/create-blog",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newBlog),
        }
      )
        .then((res) => res.json())
        .then((inserted) => {
          if (inserted?.data?._id) {
            toast.success("Added New Blog");
            reset();
          } else {
            toast.error("Faield to Added New Blog");
          }
        });
    }
  };

  return (
    <div>
      <div className="createProject">
        <div className="createProjectDev">
          <h3 className="text-center mt-3">Create Blog</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="createProjectForm">
            <input
              placeholder="Blog Name"
              {...register("name", { required: true })}
              required
            />
            <input
              placeholder="Blog Image"
              {...register("image", { required: true })}
              required
            />
            <ReactQuill
              value={editorContent}
              onChange={handleChange}
              theme="snow"
            />
            <input name="" type="submit" required />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
