import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::faq.faq', {
  only: ['find', 'findOne', 'create', 'update', 'delete'],
});