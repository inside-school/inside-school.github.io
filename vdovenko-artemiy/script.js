let carrData = [
    {
        name: 'Passat', 
        model: 'b7', 
        year: 2015, 
        color: 'Green', 
        price: 13000, 
        image: 'volkswagen-passat-b7.JPG',
        about: '',
    },
    { name: 'Bmw', model: 'E60', year: 2010, price: 11500, color: 'Gray', image: 'bmw-m5-e60.jpg' , about: '',},
    { name: 'Reno', model: 'Logan', year: 2017, price: 7500, color: 'blue', image: 'image.jpg', about: '', },
    { name: 'Daewoo', model: 'Lanos', year: 2007, price: 2500, color: 'Blue', image: 'DaewooLanos.jpg', about: '', },
    { name: 'Opel', model: 'Vectra', year: 2008, price: 5000, color: 'Black', image: 'Opel Vertra.jpg' , about: '',},
    { name: 'Golf', model: '6 ', year: 2012, price: 7000, color: 'Gray', image: 'polik.jpg', about: '', },   

]

let carrApp = {
    data() {
        return {
            cars: carrData,
            currentCar:carrData[0],
            currentIndex:0,
        }
    },
    methods: {
        showCar(index){
            this.currentCar = carrData[index];
            this.currentIndex = index;
        }
    },
}
Vue.createApp(carrApp).mount('#vue-cont')
