import Request1 from "./index";

const getHomeMutidata = () => {
  return Request1.get<{
    recommend: IRequest.ICategory[];
    banner: string[];
  }>("/home/multidata");
};
const getGoodList = (page: number) => {
  return Request1.get<IRequest.IGood[]>("/home/getGoodList/" + page + "");
};
const getMyMutidata = () => {
  return Request1.get("/home/mySwiper");
};
export { getHomeMutidata, getGoodList, getMyMutidata };
