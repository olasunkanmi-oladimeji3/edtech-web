"use client";

import { useState } from "react";
import { Trash2, Upload, File, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Define TypeScript interfaces for props and lesson structure
interface LessonMaterial {
  name: string;
  type: string;
  size: number;
}

interface Lesson {
  id: string;
  title: string;
  content: string;
  materials?: LessonMaterial[];
}

interface LessonEditorProps {
  lesson: Lesson;
  index: number;
  onUpdate: (id: string, updatedLesson: Lesson) => void;
  onDelete: (id: string) => void;
}

export default function LessonEditor({ lesson, index, onUpdate, onDelete }: LessonEditorProps) {
  const [lessonData, setLessonData] = useState<Lesson>(lesson);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedLesson = { ...lessonData, [name]: value };
    setLessonData(updatedLesson);
    onUpdate(lessonData.id, updatedLesson);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const newMaterial: LessonMaterial = { name: file.name, type: file.type, size: file.size };
      const updatedMaterials = [...(lessonData.materials || []), newMaterial];
      const updatedLesson = { ...lessonData, materials: updatedMaterials };
      setLessonData(updatedLesson);
      onUpdate(lessonData.id, updatedLesson);
    }
  };

  const removeMaterial = (materialToRemove: LessonMaterial) => {
    const updatedMaterials = lessonData.materials?.filter((material) => material.name !== materialToRemove.name) || [];
    const updatedLesson = { ...lessonData, materials: updatedMaterials };
    setLessonData(updatedLesson);
    onUpdate(lessonData.id, updatedLesson);
  };

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={`lesson-${index}`}>
        <AccordionTrigger>
          Lesson {index + 1}: {lessonData.title}
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={`lesson-title-${index}`}>Lesson Title</Label>
              <Input id={`lesson-title-${index}`} name="title" value={lessonData.title} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`lesson-content-${index}`}>Lesson Content</Label>
              <Textarea
                id={`lesson-content-${index}`}
                name="content"
                value={lessonData.content}
                onChange={handleChange}
                rows={10}
              />
            </div>
            <div className="space-y-2">
              <Label>Lesson Materials</Label>
              <div className="flex items-center space-x-2">
                <Input type="file" id={`lesson-material-${index}`} className="hidden" onChange={handleFileUpload} />
                <Label
                  htmlFor={`lesson-material-${index}`}
                  className="cursor-pointer flex items-center px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Material
                </Label>
              </div>
              {lessonData.materials && lessonData.materials.length > 0 && (
                <ul className="mt-2 space-y-2">
                  {lessonData.materials.map((material, mIndex) => (
                    <li key={mIndex} className="flex items-center justify-between p-2 bg-muted rounded-md">
                      <div className="flex items-center">
                        <File className="mr-2 h-4 w-4" />
                        <span>{material.name}</span>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => removeMaterial(material)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <Button variant="destructive" size="sm" onClick={() => onDelete(lessonData.id)}>
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Lesson
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
