import PokemonCard from '../PokemonCard/PokemonCard';
import PokemonView from '../PokemonView/PokemonView';
import './ScreenPanel.scss';

export default function ScreenPanel (props) {
    return (
        <>
            <div className="screenpannel">
                <PokemonCard></PokemonCard>
                <PokemonCard></PokemonCard>
                <PokemonCard></PokemonCard>
                <PokemonCard></PokemonCard>
                <PokemonCard></PokemonCard>

            </div>
        </>
    )
}