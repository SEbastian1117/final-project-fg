export interface AuthResponse {
    ok: boolean,
    uid?: string,
    name?: string,
    token?: string,
    email?: string,
    msg?: string
}

export interface User {
    uid: string,
    name: string,
    email: string
}

export interface Pet {
    uid?: string,
    ok?: boolean,
    msg?: string,
    name: string,
    age: number,
    race: string,
    species: string,
    photo: string,
    imgUrl: string
}

export interface PetResponse {
    ok: boolean,
    msg: string,
    myPet?: object
}