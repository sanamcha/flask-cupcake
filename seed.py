from app import app
from models import db, Cupcake


db.drop_all()
db.create_all()

c1 = Cupcake(
    flavor="cherry",
    size="large",
    rating=5,
)

c2 = Cupcake(
    flavor="chocolate",
    size="small",
    rating=9,
    image="https://www.bakedbyrachel.com/wp-content/uploads/2018/01/chocolatecupcakesccfrosting1_bakedbyrachel.jpg"
)
c3 = Cupcake(
    flavor="vanilla",
    size="medium",
    rating=8,
    image="https://tse1.mm.bing.net/th?id=OIP.yvUwAEn_9vvhFXn93PXCOwHaHa&pid=Api&P=0&w=156&h=156"
)

db.session.add_all([c1, c2,c3])
db.session.commit()