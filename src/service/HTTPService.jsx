
const getAll = () =>{
    return http.get("/model");
};

const get = id => {
    return http.get(`/model/${id}`);
};

const create = data => {
    return http.post("/model", data);
};

const update = (id, data) => {
    return http.put (`/model/${id}`, data);
}

const remove = id => {
    return http.delete(`/model/${id}`);
};

const removeAll = () => {
    return http.delete (`/model`);
};

const findByTheme = aut

