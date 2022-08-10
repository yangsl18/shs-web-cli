export const genMessage = async (modules) => {
  const locales = {};
  // 遍历modules，并加上namespace
  for (const path in modules) {
    const namespace = path.split('/').pop().split('.')[0];
    const { default: module } = await modules[path]();
    for (let key in module) {
      locales[`${namespace}.${key}`] = module[key];
    }
  }
  return locales;
};
