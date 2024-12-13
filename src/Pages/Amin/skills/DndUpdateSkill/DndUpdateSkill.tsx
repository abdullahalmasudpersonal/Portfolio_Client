import { useEffect, useState } from "react";
import {
  useGetSkillsQuery,
  useUpdateSkillSerialNumberMutation,
} from "../../../../redux/features/skills/skillsApis";
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
import { TSkill } from "../../../../types/skill.types";
import { SortableItem } from "./SortableItem";
import { Typography } from "antd";

const DndUpdateSkill = () => {
  const [updateSkillSerialNumber] = useUpdateSkillSerialNumberMutation();
  const { data, isLoading } = useGetSkillsQuery({});
  const skillsData = data?.data;
  const [projects, setProjects] = useState<TSkill[]>([]);
  useEffect(() => {
    if (skillsData) {
      setProjects(skillsData);
    }
  }, [skillsData]);

  const sensorss = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEndSkill = async (event: any) => {
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
        const response = await updateSkillSerialNumber({
          skills: reorderedProjects,
        });
        console.log(response, "Order updated successfully!");
      } catch (error) {
        console.error("Failed to update order:", error);
      }
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "grid",
        gridTemplateColumns: "auto auto auto auto auto auto auto",
        gridGap: "15px",
      }}
    >
      {isLoading ? (
        "Loading..."
      ) : (
        <DndContext
          sensors={sensorss}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEndSkill}
        >
          <SortableContext
            items={projects.map((item) => item.serialNumber)}
            strategy={verticalListSortingStrategy}
          >
            {projects.map((item) => (
              <SortableItem key={item.serialNumber} id={item.serialNumber}>
                <div
                  style={{
                    height: "130px",
                    width: "130px",
                    borderRadius: "5px",
                    padding: "10px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  }}
                >
                  <Typography
                    style={{ textAlign: "center", marginBottom: "5px" }}
                  >
                    {item.title}({item.serialNumber})
                  </Typography>
                  <div
                    style={{
                      height: "90px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <img
                      style={{ margin: "auto" }}
                      src={item?.image}
                      width="60px"
                      height="60px"
                      alt=""
                    />
                  </div>
                </div>
              </SortableItem>
            ))}
          </SortableContext>
        </DndContext>
      )}
    </div>
  );
};

export default DndUpdateSkill;
