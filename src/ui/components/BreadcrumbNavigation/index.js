import React from 'react';
import { Link as ReactRouterLink, withRouter } from 'react-router-dom'
import Breadcrumbs from '@tds/core-breadcrumbs'

const breadcrumbNameMap = {
  '/iphones': 'Iphones',
  '/watches': 'Watches',
}

const BreadcrumbNavigation = ({ location }) => {
  const crumbs = location.pathname.split('/').filter(i => i)
  const extraBreadcrumbItems = crumbs.map((i, index) => {
    const url = `/${crumbs.slice(0, index + 1).join('/')}`
    return <Breadcrumbs.Item key={breadcrumbNameMap[url]} href={url}>{breadcrumbNameMap[url]}</Breadcrumbs.Item>
  })

  const breadcrumbItems = [
    <Breadcrumbs.Item key="home" href="/">
      Home
    </Breadcrumbs.Item>,
  ].concat(extraBreadcrumbItems);

  return location.pathname === '/' ? null : <Breadcrumbs reactRouterLinkComponent={ReactRouterLink} baseUrl="http://localhost:8080/">{breadcrumbItems}</Breadcrumbs>
}

export default withRouter(BreadcrumbNavigation);
