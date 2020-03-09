export const checkRequiredData = (dto, fields) => {
    return fields.every((field) => dto[field]);
};