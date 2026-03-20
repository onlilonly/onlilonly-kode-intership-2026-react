export type TDepartment =
    | "android"
    | "ios"
    | "design"
    | "management"
    | "qa"
    | "back_office"
    | "frontend"
    | "hr"
    | "pr"
    | "backend"
    | "support"
    | "analytics";

export interface TUser {
    id: string;
    firstName: string;
    lastName: string;
    userTag: string;
    avatarUrl: string;
    department: TDepartment;
    position: string;
    birthday?: string;
    phone?: string;
}
