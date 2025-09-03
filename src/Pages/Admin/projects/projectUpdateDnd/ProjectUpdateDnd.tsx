import { useEffect, useState } from "react";
import {
  DndContext,
  useSensor,
  useSensors,
  PointerSensor,
  closestCenter,
  KeyboardSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";
import {
  useGetAllProjectQuery,
  useUpdateProjectSerialNumberMutation,
} from "../../../../redux/features/project/projectApi";
import { TProject } from "../../../../types/project.types";

const ProjectUpdateDnd = () => {
  const { data, isLoading } = useGetAllProjectQuery({});
  const [updateProjectSerialNumber] = useUpdateProjectSerialNumberMutation();
  const projectData = data?.data;
  const [projects, setProjects] = useState<TProject[]>([]);
  useEffect(() => {
    if (projectData) {
      setProjects(projectData);
    }
  }, [projectData]);

  const sensorss = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEndProject = async (event: any) => {
    const { active, over } = event;
    if (!over) return;
    if (active.id !== over.id) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let reorderedProjects: any[] = [];
      setProjects((items) => {
        const oldIndex = items.findIndex(
          (item) => item.serialNumber === active.id
        );
        const newIndex = items.findIndex(
          (item) => item.serialNumber === over.id
        );
        reorderedProjects = arrayMove(items, oldIndex, newIndex);
        return reorderedProjects;
      });

      try {
        const response = await updateProjectSerialNumber({
          projects: reorderedProjects,
        });
        console.log(response, "Order updated successfully!");
      } catch (error) {
        console.error("Failed to update order:", error);
      }
    }
  };

  return (
    <div>
      <div style={{ padding: "10px" }}>
        {isLoading ? (
          ""
        ) : (
          <DndContext
            sensors={sensorss}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEndProject}
          >
            <SortableContext
              items={projects.map((item) => item.serialNumber)}
              strategy={verticalListSortingStrategy}
            >
              {projects.map((item) => (
                <SortableItem key={item.serialNumber} id={item.serialNumber}>
                  <div
                    style={{
                      height: "200px",
                      width: "200px",
                      borderRadius: "5px",
                      padding: "20px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                      marginBottom: "10px",
                    }}
                  >
                    <h6>{item.title}</h6>
                    <h6>{item.serialNumber}</h6>
                  </div>
                </SortableItem>
              ))}
            </SortableContext>
          </DndContext>
        )}
      </div>
    </div>
  );
};

export default ProjectUpdateDnd;
