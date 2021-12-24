export const serve = (port: number, filename: string, dir: string) => {
  console.log(`Serving traffic on port ${port}`);
  console.log(`Serving/fetching cells from ${filename}`);
  console.log(`The file is in directory ${dir}`);
};
