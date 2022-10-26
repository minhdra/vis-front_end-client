import instance from './axios';

export const search = async (data) => (await instance.post('/product/search', {
  ...data
})).data;

export const getById = async (id) => (await instance.get('/product/getById/' + id)).data;

export const getByPath = async (path) => (await instance.get('/product/getByPath/' + path)).data;

export const remove = async (data) => (await instance.post('/product/delete', {
  ...data
}));

export const update = async (data) => (await instance.post('/product/update', {
  ...data
}));

export const create = async (data) => (await instance.post('/product/create', {
  ...data
}));
