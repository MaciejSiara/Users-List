export const upObject = (oldObject, updatedProperties) => {
   return {
      ...oldObject,
      ...updatedProperties,
   };
};
