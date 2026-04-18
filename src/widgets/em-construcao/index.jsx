import * as S from "./styles"
import ConstructionSign from "./src/construction-sign"

export default function EmConstrucao() {
    return (
        <S.Wide>
            <S.Box>
                <ConstructionSign size={150}></ConstructionSign>
                <S.Title>Site em construção</S.Title>
            </S.Box>
        </S.Wide>
    )
}