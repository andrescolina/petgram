import React from 'react'
import { DetailPhotoCard } from './components/DetailPhotoCard'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCard'
import { Logo } from './components/Logo'
import { GlobalStyles } from './styles/GlobalStyles'

export const App = () => {
    const urlParams = new window.URLSearchParams
      (window.location.search)
    const detailId = urlParams.get('detail')
    
    return (
      <>
        <GlobalStyles />
        <Logo />
        {
          detailId ? <DetailPhotoCard categoryId={detailId} />
            : <>
                <ListOfCategories />
                <ListOfPhotoCards categoryId={1}/>   
            </>
        }
      </>
  )
}
