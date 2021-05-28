import React, { useState, useMemo } from 'react';
import Input from './block/Input'
import Filter from './block/Filter'
import TodoItem from './block/TodoItem'
import Tabs from './Tabs'

const getKey = () => Math.random().toString(32).substring(2);

const Todo = () => {

  //todo:selectの表示
  const initialState = {
    events: [
        {
            id: 1,
            title: '最初のエンジニアイベント',
            category: 1
        },{
            id: 2,
            title: '2番目のエンジニアイベント',
            category: 1
        },{
            id: 1,
            title: '最初のビジネスイベント',
            category: 2
        },{
            id: 2,
            title: '2番目のビジネスイベント',
            category: 2
        },{
          id: 1,
          title: '最初のその他イベント',
          category: 3
      },{
          id: 2,
          title: '2番目のその他イベント',
          category: 3
      },
    ],
    categories: [
        {
            id: 1,
            title: 'エンジニア'
        },{
            id: 2,
            title: 'ビジネス'
        },{
            id: 3,
            title: 'その他'
        }
    ]
};

// イベント
const [events, setevents] = useState(initialState.events);
// カテゴリー
const [categories, setCategories] = useState(initialState.categories);
// 検索条件
const [filterQuery, setFilterQuery] = useState({});
// ソート条件
const [sort, setSort] = useState({});

const filteredevent = useMemo(() => {
  let tmpevents = events;

  // 絞り込み検索
  tmpevents = tmpevents.filter(row => {

      // カテゴリーで絞り込み
      if (
          filterQuery.category_id &&
          row.category !== parseInt(filterQuery.category_id)
      ) {
          return false;
      }
      return row;
  });

  return tmpevents;
}, [filterQuery, sort, events]);

// 入力した情報をfilterQueryに入れる
const handleFilter = e => {
  const { name, value } = e.target;
  setFilterQuery({ ...filterQuery, [name]: value });  
};

// 選択したカラムをSortに入れる
const handleSort = column => {
  if (sort.key === column) {
      setSort({ ...sort, order: -sort.order });
  } else {
      setSort({
          key: column,
          order: 1
      })
  }
};

//todo:開始
  const [items, setItems] = React.useState([]);
  const [filter, setFilter] = React.useState('ALL');

  const handleAdd = text => {
    setItems([...items, { key: getKey(), text, done: false }]);
  };

  const handleFilterChange = value => setFilter(value);

  const displayItems = items.filter(item => {
    if (filter === 'ALL') return true;
    if (filter === 'engineer') return item.engineer;
    if (filter === 'business') return item.business;
  });

  const handleCheck = checked => {
    const newItems = items.map(item => {
      if (item.key === checked.key) {
        item.done = !item.done;
      }
      return item;
    });
    setItems(newItems);
  };
//todo: 終了

  return (
    <div>
      <div >
        ⚛️ React ToDo
      </div>
      <Filter
        onChange={handleFilterChange}
        value={filter}
      />
      //todo:表示部分
      <select
                      name="category_id"
                      value={filterQuery.category_id}
                      onChange={handleFilter}
                  >
                      <option value="">全て</option>
                      {/* 表示部分 */}
                      {
                          categories.map((item) => {
                              return (
                                  <option
                                      key={item.id}
                                      value={item.id}>
                                      {item.title}
                                  </option>
                              );
                          })
                      }
                  </select>

                  <table>
          <thead>
          <tr>
              <th onClick={() => handleSort('id')}>ID</th>
              <th>タイトル</th>
              <th onClick={() => handleSort('category')}>カテゴリー</th>
          </tr>
          </thead>
          <tbody>
          {
              filteredevent.map((event) => {
                  return(
                      <tr key={event.id}>
                          <td>{event.id}</td>
                          <td>{event.title}</td>
                          <td>
                          {
                              event.category ?
                              categories.find(c => c.id === event.category).title : ''
                          }
                          </td>
                      </tr>
                  );
              })
          }
          </tbody>
      </table>
      <div >
        {displayItems.length} items
      </div>
      <Tabs/>
    </div>
  );
}

export default Todo




