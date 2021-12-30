
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export type Card = {
    id: string;
    value: string | number;
    suit: string;
    points: number;
    front: string;
    back: string;
}

export type Deck = {
    id: string | number,
    value: string | number,
    suit: string,
    points: number,
    front: string,
    back: string
  }

export type Player = {
    id: string;
    username: string;
    hand: Deck[];
    score: number;
    turn: boolean;
    icon: string;
    isBuying: boolean;
    discardNeeded: boolean;
}

export type Round = {
    round: number, 
    sets: number, 
    runs: number, 
    cardCount: number, 
    discard: boolean
}

export type Game = {
    id: string,
    players: Player[],
    round: number,
    active: boolean,
    currentPlayer: {
        isBuying: boolean,
        discardNeeded: boolean,
        player_id: string
    }
    game_name: string,
    cards: Card[],
    discards: Card[],
    goal: Round,
    host: string,
    host_name: string,
    host_icon: string
}
