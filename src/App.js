import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories"
import ShowFullItem from "./components/ShowFullItem"
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Автоматический выключатель Systeme',
          img: 'img2.jpg',
          desc: '16A',
          category: 'automats',
          price: '250'
        },
        {
          id: 2,
          title: 'Автоматический выключатель BASIC',
          img: 'img3.jpg',
          desc: '16A',
          category: 'automats',
          price: '200'
        },
        {
          id: 3,
          title: 'Дифференциальный автомат IEK',
          img: 'img4.jpg',
          desc: '16A',
          category: 'automats',
          price: '1100'
        },
        {
          id: 4,
          title: 'Розетка белая Schneider Electric',
          img: 'img5.jpg',
          desc: 'Одинарная 16A',
          category: 'sockets',
          price: '220'
        },
        {
          id: 5,
          title: 'Розетка черная Schneider Electric',
          img: 'img6.jpg',
          desc: 'Одинарная 16А',
          category: 'sockets',
          price: '270'
        },
        {
          id: 6,
          title: 'Розетка белая накладная Schneider Electric',
          img: 'img7.jpg',
          desc: 'Двойная 16А',
          category: 'sockets',
          price: '240'
        },
        {
          id: 7,
          title: 'Выключатель белый Schneider Electric',
          img: 'img8.jpg',
          desc: 'Одноклавишный',
          category: 'switches',
          price: '200'
        },
        {
          id: 8,
          title: 'Выключатель белый Schneider Electric',
          img: 'img9.jpg',
          desc: 'Двухклавишный',
          category: 'switches',
          price: '240'
        },
        {
          id: 9,
          title: 'Выключатель черный Schneider Electric',
          img: 'img13.jpg',
          desc: 'Одноклавишный',
          category: 'switches',
          price: '310'
        },
        {
          id: 10,
          title: 'Кабель ВВГнг 3х2,5 Камкабель',
          img: 'img10.jpg',
          desc: 'Бухта 50м',
          category: 'cable',
          price: '4550'
        },
        {
          id: 11,
          title: 'Кабель NUM 3x2,5 Камкабель',
          img: 'img11.jpg',
          desc: 'Бухта 50м',
          category: 'cable',
          price: '6700'
        },
        {
          id: 12,
          title: 'Кабель КГ 3x2,5 Камкабель' ,
          img: 'img12.jpg',
          desc: 'Бухта 50м',
          category: 'cable',
          price: '7200'
        },
        
        

      ],
      showFullItem: false,
      fullItem: {}


    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this. deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
  return (
    <div className='wrapper'>
     <Header orders={this.state.orders} onDelete={this.deleteOrder} />
     <Categories chooseCategory={this.chooseCategory}/>
     <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

     {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
     <Footer/>
    </div>
  );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category){
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})

  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item] })

  }
  
}

export default App;
