import * as S from './styles'
import Typography from '@/components/Typography'
import { products } from '@/model/products'
import { ProductCard } from '@/components/ProductCard/ProductCard'
import { useState } from 'react'

export default function Products() {
    const [activeIndicator, setActiveIndicator] = useState(1);
    const [fixedIndicator, setFixedIndicator] = useState(Math.floor(products.length / 2))
    const [startPosition, setStartPosition] = useState(0)

    function onIndicatorClick(indicatorIndex: number) {
        setFixedIndicator(fixedIndicator + (activeIndicator - indicatorIndex))
        setActiveIndicator(indicatorIndex)
    }

    function touchStart(event: any) {
        setStartPosition(event.touches[0].clientX)
    }

    function touchEnd(event: any) {
        if (startPosition > event.changedTouches[0].clientX && startPosition - event.changedTouches[0].clientX > 200 && activeIndicator < products.length) {
            setFixedIndicator(fixedIndicator - 1)
            setActiveIndicator(activeIndicator + 1)
        }

        if (event.changedTouches[0].clientX > startPosition && event.changedTouches[0].clientX - startPosition && activeIndicator > 1) {
            setFixedIndicator(fixedIndicator + 1)
            setActiveIndicator(activeIndicator - 1)
        }
    }

    return (
        <S.ProductsWrapper id='products'>
            <div>
                <Typography level={1} size="large" fontWeight={700} lineHeight="2.25rem">
                    Produtos
                </Typography>
            </div>
            <div>
                <Typography level={6} size="xsmall" fontWeight={100} lineHeight="1.25rem">
                    Veniam laborum aute aute tempor qui occaecat  enim dolor duis ad. Laboris labore velit magna cupidatat exercitation est  aliquip.
                </Typography>
            </div>
            <S.ProductsContainer onTouchStart={touchStart} onTouchEnd={touchEnd} activeIndicator={activeIndicator} fixedIndicator={fixedIndicator} isQuantityEven={products.length % 2 == 0}>
                {products.map(({ name, description, Emoji }) => (
                    <ProductCard.Root key={name}>
                        <ProductCard.Icon>
                            {<Emoji />}
                        </ProductCard.Icon>
                        <ProductCard.Text>
                            <ProductCard.Title>
                                <Typography level={4} fontWeight={700} color="white" size="normal">
                                    {name}
                                </Typography>
                            </ProductCard.Title>
                            <ProductCard.Description>
                                <Typography level={4} fontWeight={300} color="white" size="xsmall">
                                    {description}adasdasdasdasd asd adasdas dasdasdasdasd asd asdasdas asdsad dasdasdasdadas asdasd asdasd asdasdasdasd
                                </Typography>
                            </ProductCard.Description>
                        </ProductCard.Text>
                    </ProductCard.Root>
                ))}
            </S.ProductsContainer>
            <S.CarouselIndicators activeIndicator={activeIndicator} >
                {products.map((product, index) => (
                    <button key={product.name} onClick={() => onIndicatorClick(index + 1)} />
                ))}
            </S.CarouselIndicators>
        </S.ProductsWrapper>
    )
}