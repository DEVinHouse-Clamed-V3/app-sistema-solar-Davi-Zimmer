
import { Text, View, Image } from 'react-native';

export function CreateComponent({ nome, img, velocidadeOrbitalMediaKmS, quantidadeSatelites,
    areaSuperficieKm2, periodoRotacaoDias }, styles) {

    return (
        <View style={styles.postContainer}>

            <View style={styles.postHeader}>
                <Text style={styles.planetName}>{nome}</Text>
                <Image source={uri = `${img}`} style={styles.planetImage} />
            </View>

            <View>
                <View style={styles.rowInfo}>
                    <Text style={styles.data}>Velocidade média de órbita: </Text>
                    <Text style={styles.dataValue}>{velocidadeOrbitalMediaKmS} km/s</Text>
                </View>

                <View style={styles.rowInfo}>
                    <Text style={styles.data}>Quantia de satélites: </Text>
                    <Text style={styles.dataValue}>{quantidadeSatelites}</Text>
                </View>

                <View style={styles.rowInfo}>
                    <Text style={styles.data}>Superfície: </Text>
                    <Text style={styles.dataValue}>{areaSuperficieKm2} km²</Text>
                </View>

                <View style={styles.rowInfo}>
                    <Text style={styles.data}>Período de rotação</Text>
                    <Text style={styles.dataValue}>{periodoRotacaoDias} d</Text>
                </View>

            </View>

        </View>
    )
}