import React, { useEffect, useState } from 'react';
import './App.scss';
import InfoCookie from './img/Info.svg'
import Warn from './img/Warn.svg'
import Trash from './img/Icon - Trash.svg'
import Tag from './img/Icon - Label.svg'
import { useCookieWatcher } from '@fcannizzaro/react-use-cookie-watcher'
import { Offline, Online } from 'react-detect-offline'

function App() {
  const [dataChart, setDataChart] = useState([
    {
      month: 'May',
      value: 60
    },
    {
      month: 'Apr',
      value: 40
    },
    {
      month: 'Mar',
      value: 70
    },
    {
      month: 'Feb',
      value: 50
    },
    {
      month: 'Jan',
      value: 65
    },
  ])

  const [dataChart2, setDataChart2] = useState([
    { value: 70 },
    { value: 70 },
    { value: 60 },
    { value: 65 },
    { value: 90 },
    { value: 70 },
    { value: 100 },
    { value: 95 },
    { value: 65 },
    { value: 60 },
    { value: 69 },
    { value: 60 }
  ])

  const [dataTable, setDataTable] = useState([
    {
      id: 1,
      name: 'Table 01',
      category: 'Category 01',
      available: 'Available',
      arrival: 'Arrived'
    },
    {
      id: 2,
      name: 'Table 02',
      category: 'Category 01',
      available: 'Full',
      arrival: "Hasn't Arrived"
    },
    {
      id: 3,
      name: 'Table 03',
      category: 'Category 01',
      available: 'Available',
      arrival: 'Arrived'
    },
    {
      id: 4,
      name: 'Table 04',
      category: 'Category 01',
      available: 'Available',
      arrival: 'Arrived'
    },
    {
      id: 5,
      name: 'Table 05',
      category: 'Category 01',
      available: 'Available',
      arrival: 'Arrived'
    },
  ])

  const [selectedTable, setSelectedTable] = useState([])

  const [checked, setChecked] = useState(0)
  const [checked2, setChecked2] = useState(0)
  const [close, setClose] = useState(false)
  const [closeAlert, setCloseAlert] = useState(false)

  const isNotExpired = useCookieWatcher('cookie');

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }, [])

  const onSelectList = (list) => {
    if (close) setClose(false)
    const duplicate = selectedTable.find(el => el.id === list.id ? true : false)
    let addNewList
    if (duplicate) {
      addNewList = selectedTable.filter(el => el.id !== duplicate.id)
    } else addNewList = selectedTable.concat(list)

    setSelectedTable(addNewList)
  }

  const acceptCookie = () => {
    const getToday = new Date()
    getToday.setMinutes(getToday.getMinutes() + 1)
    document.cookie = `cookie=this-cookie; expires=${getToday.toUTCString()}; path=/;`
  }

  const deleteTable = () => {
    if (selectedTable.length > 0) {
      setDataTable([])
    }
  }

  return (
    <>
      <div className="blank-page" />
      <Online>
        <div className={!isNotExpired ? "req-cookie" : "req-cookie-hide"}>
          <div className="text">
            <img src={InfoCookie} alt="" />
            <p>This website uses cookies</p>
            <div className="ok-btn" onClick={acceptCookie}>
              <p>OK</p>
            </div>
          </div>
        </div>
      </Online>
      <div className="App">
        <div className="container">
          <h1 className="title" >Charts and Table Visualization</h1>
          <div className="charts">
            <div className="horizontal-bar">
              <p className="title-chart" >Chart 1</p>
              {dataChart.map((data, i) => (
                <div
                  key={i}
                  className="line-chart"
                >
                  <div className="period">
                    <p>{data.month}</p>
                  </div>
                  <div className="chart">
                    <div className="primary-chart"></div>
                    <div className={`secondary-chart-${data.value}`}></div>
                  </div>
                </div>
              ))}
              <div className="line-chart">
                <div className="period"></div>
                <div className="range">
                  <p>01</p>
                  <p>02</p>
                  <p>03</p>
                  <p>04</p>
                  <p>05</p>
                  <p>06</p>
                  <p>07</p>
                </div>
              </div>
            </div>
            <div className="vertical-bar">
              <div className="">
                <p className="title-chart" >Chart 2</p>
              </div>
              <div className="chart-2">
                <div className="list-chart">
                  <section class="bar-graph bar-graph-vertical bar-graph-two">
                    {dataChart2.map((data, i) => (
                      <div
                        key={i}
                        class={`bar-${data.value} bar-container`}
                      >
                        <div class="bar"></div>
                      </div>
                    ))}
                  </section>
                </div>
                <div className="radio-button">
                  <div className="checkbox-1">
                    <div className={`checkbox-border ${checked2 == 1 ? "checked2" : ""}`} onClick={() => setChecked2(1)}>
                    </div>
                    <div className="label">Text 1</div>
                  </div>
                  <div className="space" />
                  <div className="checkbox-1">
                    <div className={`checkbox-border ${checked2 == 2 ? "checked2" : ""}`} onClick={() => setChecked2(2)}>
                    </div>
                    <div className="label">Text 2</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="donut-chart">
              <p className="title-chart">Chart 3</p>
              <div className="donut">
                <figure class="chart" data-percent="75">
                  <figcaption className="data-percent" >70%</figcaption>
                  <svg width="200" height="200">
                    <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)" />
                  </svg>
                </figure>
                <div className="donut-calculate">
                  <div class="donut-calculate-container">
                    <div className="checkbox-2">
                      <div className={`checkbox-border ${checked == 1 ? "checked" : ""}`} onClick={() => setChecked(1)}>
                      </div>
                      <div className="label">Text 1
                      </div>
                    </div>
                    <div className="checkbox-2">
                      <div className="space-2" />
                      <p>210 Guest(s)</p>
                    </div>
                    <div className="hr" />
                    <div className="space-2" />
                    <div className="checkbox-2">
                      <div className={`checkbox-border ${checked == 2 ? "checked" : ""}`} onClick={() => setChecked(2)}>
                      </div>
                      <div className="label">Text 2</div>
                    </div>
                    <div className="checkbox-2">
                      <div className="space-2" />
                      <p>40 Guest(s)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Online>
            <div className="table">
              <table className="tb">
                <tr>
                  <th className="list-with-button">
                    <div className="check-box" />
                    <div className="space" />
                    Name
                  </th>
                  <th>Category</th>
                  <th>Availability</th>
                  <th>Arrival</th>
                </tr>
                {dataTable.map((data) => {
                  return (
                    <tr key={data.id} >
                      <td className="list-with-button">
                        <div
                          className={`check-box ${selectedTable.find(el => el.id === data.id ? true : false) ? "checked3" : ""}`}
                          onClick={() => onSelectList(data)} ></div>
                        <div className="space"></div>
                        {data.name}
                      </td>
                      <td>{data.category}</td>
                      <td>{data.available}</td>
                      <td>{data.arrival}</td>
                    </tr>
                  )
                })}
              </table>
              {selectedTable.length > 0 && (
                <div className={close ? "hide-data" : "selected-data"}>
                  <div className="action">
                    <div className="">
                      <p><span className='close' onClick={() => setClose(true)} >&#10006;</span> {selectedTable.length} Table selected</p>
                    </div>
                    <div className="assign">
                      <img src={Tag} alt="" />
                      <p className="assign-text" >Assign Category</p>
                    </div>
                    <div className="delete" onClick={() => deleteTable()} >
                      <img src={Trash} alt="" />
                      <p className="delete-text" >Delete Table</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Online>
        </div>
      </div>
      <Offline>
        <div className={closeAlert ? "hide-alert" : "alert"}>
          <div className="alert-content">
            <span className="close-alert" onClick={() => setCloseAlert(!closeAlert)} >&#10006;</span>
            <img src={Warn} alt="" />
            <h3>No internet connection</h3>
            <p>Seems like you're not connected to the internet! Check your connection and refresh the page.</p>
          </div>
        </div>
      </Offline>
    </>
  )
}

export default App;
