'use clinet'
import { Button } from "@/app/components"
import { ProductCar } from "@/constants/types/homeType"
import { IcGas } from "@/public/icons/IcGas"
import { IcSteeringWheel } from "@/public/icons/IcSteeringWheel"
import { IcTire } from "@/public/icons/IcTire"
import '@/sections/CardProduct/CardProduct.css'
 
type Props = {
    iteamDetail?: ProductCar
}

const CardProduct = ({
    iteamDetail,
}: Props) => {
    return(
        <div
            className="card-items"
        >
            <div
                style={{
                    fontSize: '26px',
                    fontWeight: 600,
                    padding: '0 2rem',
                }}
            >
                {iteamDetail?.name}
            </div>
            <div
                style={{
                    fontSize: '24px',
                    fontWeight: 500,
                    marginTop: '1rem',
                    padding: '0 2rem',
                }}
                >{iteamDetail?.id}
            </div>
            <div className="mt-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src="/images/g63-hero.png" width="80%" height="80%" />
            </div>
            <div className="mt-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src="/images/hero2.png" width="80%" height="80%" />
            </div>
            <div className="mt-5"
                style={{
                    padding: '0 2rem',
                    position: 'relative',
                }}
            >
                <div className="card-info-product">
                    <div style={{ flexDirection: 'column', alignItems: 'center', display:'flex', rowGap: '.3rem'}}>
                        <IcGas width="22px" height="22px" />
                        <div>39 Gas</div>
                    </div>
                <div style={{ flexDirection: 'column', alignItems: 'center', display:'flex', rowGap: '.3rem'}}>
                        <IcSteeringWheel width="22px" height="22px" />
                        <div>500 Fuel</div>
                </div>
                <div style={{ flexDirection: 'column', alignItems: 'center', display:'flex', rowGap: '.3rem'}}>
                        <IcTire width="22px" height="22px" />
                        <div>79 Power</div>
                </div>
            </div>
            <div
                className="card-btn-product"
                style={{
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    top: 2,
                    left: 0,
                    width: '100%'
                }}
            >
                <Button
                    width="90px"
                    height="48px"
                    color="accent"
                >
                    View now
                    </Button>
                </div>
            </div>
        </div>
    )
    
}

export default CardProduct;