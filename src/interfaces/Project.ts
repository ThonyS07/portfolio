import { Project } from "@prisma/client";

export type CreateProject = Omit<Project, "id" | "createdAt" | "updatedAt">;

export type UpdateProject = Partial<CreateProject>;

export interface Params {
	params: { id: string };
}
