import Request1 from "./index";

const getCategoryList = () => {
  return Request1.get<IRequest.ICategory[]>("/categoryList");
};
export { getCategoryList };
