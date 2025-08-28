
// practice enums
enum TraficLight {
    red = "RED",
    green = "GREEN",
    yello = "YELLOW"
}
function showSignal (light:TraficLight){
    if (light === TraficLight.red){
        console.log("STOP")
    }
    if (light === TraficLight.green){
        console.log("GREEN")
    }
    if (light === TraficLight.yello){
        console.log("GET READY")
    }
}
showSignal(TraficLight.red)
showSignal(TraficLight.green)
showSignal(TraficLight.yello)



// Payment Status Enum
enum PaymentStatus {
    pending = "PENDING",
    completed = "COMPLETED",
    failed = "FAILED"
}
function checkPayment (payment:PaymentStatus){
    if (payment === PaymentStatus.completed){
        console.log("payment successfull")
    }
    if (payment === PaymentStatus.failed){
        console.log("payment unsuccessfull")
    }
    if (payment === PaymentStatus.pending){
        console.log("payment pending")
    }
}
checkPayment(PaymentStatus.failed)


// api response er sathe mapping
enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
const userDataFromApi = {name:'limon',role:"guest"}

function checkAccess(role:UserRole){
    if (role === UserRole.admin){
        console.log("admin user")
    }
    if (role === UserRole.user){
        console.log("normal user")
    }
}
checkAccess(userDataFromApi.role as UserRole)



