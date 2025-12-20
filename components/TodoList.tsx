"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

export type TodoItem = {
  id: string;
  label: string;
  checked: boolean;
};
export const todoListData: TodoItem[] = [
  { id: "todo-1", label: "Сверстать базовый layout приложения", checked: true },
  { id: "todo-2", label: "Настроить роутинг (React Router)", checked: true },
  { id: "todo-3", label: "Подключить shadcn/ui", checked: true },
  { id: "todo-4", label: "Настроить Tailwind конфиг", checked: true },
  { id: "todo-5", label: "Добавить dark mode", checked: true },

  { id: "todo-6", label: "Настроить TanStack Query", checked: true },
  { id: "todo-7", label: "Создать базовый api-client", checked: false },
  {
    id: "todo-8",
    label: "Обработать состояния loading / error",
    checked: false,
  },

  {
    id: "todo-9",
    label: "Подключить Zustand для UI-состояния",
    checked: false,
  },
  {
    id: "todo-10",
    label: "Разделить глобальное и локальное состояние",
    checked: false,
  },

  { id: "todo-11", label: "Реализовать форму логина", checked: false },
  { id: "todo-12", label: "Добавить регистрацию пользователя", checked: false },
  { id: "todo-13", label: "Подключить react-hook-form", checked: false },
  { id: "todo-14", label: "Добавить валидацию через zod", checked: false },

  { id: "todo-15", label: "Сверстать страницу профиля", checked: false },
  {
    id: "todo-16",
    label: "Реализовать редактирование профиля",
    checked: false,
  },

  { id: "todo-17", label: "Сделать TodoList компонент", checked: true },
  { id: "todo-18", label: "Добавить ScrollArea для списка", checked: true },
  { id: "todo-19", label: "Оптимизировать ререндеры списка", checked: false },
  { id: "todo-20", label: "Добавить memo для TodoItem", checked: false },

  {
    id: "todo-21",
    label: "Реализовать фильтры (all / active / completed)",
    checked: false,
  },
  { id: "todo-22", label: "Добавить поиск по задачам", checked: false },

  { id: "todo-23", label: "Добавить keyboard navigation", checked: false },
  { id: "todo-24", label: "Проверить accessibility (aria)", checked: false },

  { id: "todo-25", label: "Написать unit-тесты для TodoList", checked: false },
  { id: "todo-26", label: "Добавить e2e тесты", checked: false },

  { id: "todo-27", label: "Настроить eslint + prettier", checked: true },
  { id: "todo-28", label: "Почистить архитектуру проекта", checked: false },
  { id: "todo-29", label: "Подготовить билд к продакшену", checked: false },
  { id: "todo-30", label: "Задеплоить приложение", checked: false },
];

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full ">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>

      <ScrollArea className="h-[400px] mt-4">
        <div className="flex flex-col gap-4">
          {todoListData.map((todoItem) => (
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id={todoItem.id} defaultChecked={todoItem.checked} />
                <Label
                  htmlFor={todoItem.id}
                  className="text-sm text-muted-foreground"
                >
                  {todoItem.label}
                </Label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
