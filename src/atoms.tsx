import { atom, selector } from "recoil";

// ๐ ์ง์ ๋ ํ์์ ์ฌ์ฉํ  ๋ enum ํ์ฉ
// enum์ ๊ธฐ๋ณธ์ ์ผ๋ก ์ซ์์ ๋งค์นญ๋๋ฉฐ, ๊ฐ์ ์ถ๊ฐ๋ก ์ ์ด์ค์ผ ๊ฐ๊ณผ ๋งค์นญ๋๋ค.
export enum Categories {
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "DONE" = "DONE",
}

export interface IToDo {
    id: number;
    text: string;
    category: Categories;
}

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
});

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => {
        // ๐ atom๋ค์ ๋ฐ๋ผ๋ณด๊ณ , atom ๋ฐ์ดํฐ๋ฅผ ์กฐ์ํ  ์ ์๋ค.
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter((toDo) => toDo.category === category);
    },
});
