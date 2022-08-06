import { atom, selector } from "recoil";

// 📌 지정된 타입을 사용할 때 enum 활용
// enum은 기본적으로 숫자와 매칭되며, 값을 추가로 적어줘야 값과 매칭된다.
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
        // 📌 atom들을 바라보고, atom 데이터를 조작할 수 있다.
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter((toDo) => toDo.category === category);
    },
});
