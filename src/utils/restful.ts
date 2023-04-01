export const OK = 1;
export const Err = 2;

export function okRes(res: any, data: any) {
  res.status(200).json({
    status: OK,
    data,
    msg: "",
  });
};

export function errRes(res: any, msg: any) {
  res.status(200).json({
    status: Err,
    data: null,
    msg,
  });
};