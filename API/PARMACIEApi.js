export const getPharmacies = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => {
            console.log(error);
        });
};

export default PHARMACIEApi

