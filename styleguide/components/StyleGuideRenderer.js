import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export function StyleGuideRenderer({ title, children, toc }) {
    const { pathname, hash } = window.location
    return (
        <Wrap>
            <Header className="flex-box">
                <div className="item  logo">{title}</div>
                <nav>
                    <a href="https://github.com/zhouzuchuan/vuetify-enhanced">GitHub</a>
                </nav>
            </Header>
            <Main className="global-main">
                <div className="flex-box">
                    <Silde className="pr20" currPath={pathname + hash}>
                        {toc}
                    </Silde>
                    <div className="item">
                        {children}
                        <footer>
                            welcome with <a href="https://github.com/zhouzuchuan/vuetify-enhanced">Vuetify Enhanced</a>{' '}
                            ❤️
                        </footer>
                    </div>
                </div>
            </Main>
        </Wrap>
    )
}

const Main = styled.div`
    padding: 10px 20px;

    [data-testid*='-example-'] {
        & > [data-preview] {
            position: relative;
            padding: 0;
            padding-bottom: 50px;
            & > :first-child {
                border-bottom: 1px dashed #e8e8e8;
            }
        }

        & > [class^='rsg--controls'] {
            position: relative;
            width: 60px;
            line-height: 50px;
            height: 50px;
            margin: -51px auto 0 !important;
            color: rgba(118, 118, 118, 1);
            z-index: 1;

            & > :last-child {
                display: none;
            }
        }
    }
`

const Header = styled.div`
    position: sticky;
    top: 0;
    color: #1673b1;
    background: #fff;
    border-bottom: 1px solid #1673b1;
    z-index: 3;
    line-height: 60px;
    padding: 0 30px;

    .logo {
        font-size: 20px;
        font-weight: bold;
        text-transform: uppercase;
    }

    a {
        color: #bbb;
        margin: 0 10px;
        text-decoration: none;

        &:hover {
            color: #1673b1;
            cursor: pointer;
        }
    }
`

const Wrap = styled.div`
    position: relative;
    footer {
        font-size: 12px;
    }
`

const Silde = styled.div`
    width: 230px;
    nav {
        position: fixed;

        li {
            a {
                color: #666 !important;

                &:link,
                &.visited {
                    color: inherit !important;
                }
            }
            ${({ currPath }) => `
                a[href='${currPath}']  {
                    color: #e90  !important;
                }
            `}
        }
    }
`

StyleGuideRenderer.propTypes = {
    title: PropTypes.string.isRequired,
    homepageUrl: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default StyleGuideRenderer
