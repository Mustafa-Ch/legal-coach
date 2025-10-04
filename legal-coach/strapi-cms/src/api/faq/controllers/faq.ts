// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::faq.faq", () => ({
  async customFind(ctx) {
    const entity = await strapi.db.query("api::faq.faq").findMany({
      populate: ["questions"],
    });
    return entity;
  },
}));
