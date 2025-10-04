// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::faq.faq", {
  only: ["find", "findOne", "create", "update", "delete"],
});
