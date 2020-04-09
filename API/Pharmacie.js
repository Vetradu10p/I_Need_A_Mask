export const getPharmacies = (text) => {
   return fetch('http://192.168.10.2:4000/pharmacies/' + text)
       .then(response => response.json())
        .catch(error => {
            console.log(error);
        });
};

