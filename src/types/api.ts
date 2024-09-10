declare global {
    //Base for all entities
    export type BaseEntity = {
        id: string;
        createdAt: number;
    };

    //Intersection type
    export type Entity<T> = {
        [K in keyof T]: T[K];
    } & BaseEntity;

    export type ApiResponse = {
        loading: boolean;
        error: string | null;
        data: any | null;
    };

    export type AuthResponse = {
        data: {
            user: User | null;
        };
    } & ApiResponse;

    export type User = Entity<{
        accessToken: string;
        user: {
            name: string;
            email: string;
        };
    }>;

    export type TLoginInput = {
        email: string;
        password: string;
    };
    export type TSignUpInput = {
        name: string;
        email: string;
        password: string;
    };
}
