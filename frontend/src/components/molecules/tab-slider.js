import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Error from './error'
import Loading from '../atoms/loading'
import { QUOTES_DATA } from '../../context/cms'

class HorizontalSlider {
  constructor(el) {
    this.el = el
    this.tabsListEl = this.el.querySelector('.tabs-list')
    this.triggers = Array.from(this.el.querySelectorAll('.tab-trigger'))
    this.triggers.forEach((trigger) =>
      trigger.addEventListener('click', this.handleTabClick)
    )
    this.containerEl = this.el.querySelector('.tabs-wrapper')
    this.tabTriggerWidth = 56
    this.calculatedTabWidthPercent = 0
    this.calculatedPanelWidth = 0
    this.calculateTabAndPanelWidths()
    this.setPanelMinWidths()
    this.isAnimating = false
    this.animationDuration = 600
    this.isMobile = window.innerWidth <= 800
    this.checkMobileDesktopSwitch()
    this.handleDesktopResize()
  }

  // resize tabs when desktop screen resizes
  handleDesktopResize = () => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 800 && window.innerWidth <= 1310) {
        this.calculateTabAndPanelWidths()
        this.setPanelMinWidths()
        this.setOpenTabWidth()
      }
    })
  }

  // check if switching between mobile/desktop nad make adjsutments
  checkMobileDesktopSwitch = () => {
    setInterval(() => {
      if (window.innerWidth < 800) {
        if (!this.isMobile) {
          // switch to mobile
          this.isMobile = true
          this.triggers.forEach((trigger) => {
            trigger.parentElement.classList.remove('open')
            trigger.parentElement.removeAttribute('style')
          })
        }
      } else if (this.isMobile) {
        // switch to desktop
        this.setPanelMinWidths()
        this.triggers.forEach((trigger, index) => {
          trigger.nextElementSibling.style = 'flex'
          if (index === 0) {
            trigger.parentElement.classList.add('open')
          } else {
            trigger.parentElement.classList.remove('open')
          }
        })
        this.isMobile = false
      }
    }, 250)
  }

  // click event for tab trigger
  handleTabClick = (e) => {
    const { target } = e
    if (!this.isMobile) {
      this.desktopClick(target)
    } else {
      this.mobileClick(target)
    }
  }

  // handle click event if on desktop
  desktopClick = (target) => {
    const { parentElement: tabItem } = target
    // "close" current tab by opening previous tab
    if (tabItem.classList.contains('open')) {
      if (tabItem.previousElementSibling) {
        tabItem.previousElementSibling.querySelector('.tab-trigger').click()
      } else {
        tabItem.classList.add('bounce')
        setTimeout(() => {
          tabItem.classList.remove('bounce')
        }, 250)
      }
    }

    // prevent switching tabs while animating to prevent bug
    if (this.isAnimating) return
    this.isAnimating = true

    // reset state and tab widths
    this.triggers.forEach((trigger) => {
      trigger.parentElement.classList.remove('open')
      trigger.parentElement.style.width = null
    })

    // set active tab and width
    tabItem.classList.add('open')
    tabItem.style.width = `${this.calculatedTabWidthPercent}%`
    this.tabsListEl.dataset.current = target.dataset.index

    // wait for animation to (mostly) finish to allow for next animation to prevent weird side effect
    setTimeout(() => {
      this.isAnimating = false
    }, this.animationDuration * 0.8)
  }

  // handle click event if on mobile
  mobileClick = (target) => {
    const { parentElement: tabItem, nextElementSibling: panel } = target
    let isOpen = false
    if (tabItem.classList.contains('open')) {
      isOpen = true
    }
    const jq_panel = jQuery(panel)
    if (isOpen) {
      jq_panel.stop().slideUp()
      tabItem.classList.remove('open')
    } else {
      jq_panel.stop().slideDown()
      tabItem.classList.add('open')
    }
  }

  // calculate tab width percentage and panel min width
  calculateTabAndPanelWidths = () => {
    const containerWidth = this.containerEl.getBoundingClientRect().width
    const numberOfTabs = this.triggers.length
    const widthOffset = (numberOfTabs - 1) * this.tabTriggerWidth
    const calculatedTabWidth = containerWidth - widthOffset
    this.calculatedTabWidthPercent =
      ((containerWidth - widthOffset) / containerWidth) * 100
    this.calculatedPanelWidth = calculatedTabWidth - this.tabTriggerWidth
  }

  // set min width of panel to prevent growing/shrinking side effects
  setPanelMinWidths = () => {
    this.triggers.forEach(
      (trigger) =>
        (trigger.nextElementSibling.style.minWidth = `${this.calculatedPanelWidth}px`)
    )
  }

  // set tab width if open
  // ? do i need this?
  setOpenTabWidth = () => {
    this.triggers.forEach((trigger) => {
      if (trigger.parentElement.classList.contains('open')) {
        trigger.parentElement.style.width = `${this.calculatedTabWidthPercent}%`
      }
    })
  }
}

function TabSlider() {
  const [quotes, setQuotes] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    setQuotes(QUOTES_DATA)
  }, [])

  const handleTabClick = (e) => {
    setCurrentSlide(Number(e.target.dataset.index))
  }

  return (
    <div className="Tab-slider">
      <ul
        className="tabs-list"
      // data-current="0"
      >
        {quotes &&
          quotes.map((quote, idx) => (
            <QuoteSlide
              key={idx}
              quote={quote}
              index={idx}
              currentSlide={currentSlide}
              handleClick={(e) => handleTabClick(e)}
            />
          ))}
      </ul>
    </div>
  )
}

export default TabSlider

const QuoteSlide = ({ quote, index, currentSlide, handleClick }) => {
  return (
    <li className={`tab-item ${index === Number(currentSlide) ? 'open' : ''}`}>
      <button
        className="tab-trigger"
        data-index={index}
        onClick={(e) => handleClick(e)}
      >
        <span>Quote {index + 1}</span>
      </button>
      <div className="tab-panel">
        <div className="container-fluid">
          <div className="wrapper">
            <div className="content">
              <p className="quote">{quote.quote}</p>
              <p className="quoter">{quote.quoter}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
