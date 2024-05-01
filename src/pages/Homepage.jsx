import { Link } from 'react-router-dom'
import { PageNav } from '../components/PageNav'
export const Homepage = () => {
    return (
        <div>
            <PageNav />
            <h1>World Wise</h1>
            <Link to='/pricing'>Pricing</Link>
        </div>

    )
}
