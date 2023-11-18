export const getRandomSampleImage = (item) => {
    const sampleImages = [
        require('../../assets/sampleImages/lily.png'),
        require('../../assets/sampleImages/camelio.png'),
        require('../../assets/sampleImages/sample.png'),
        require('../../assets/sampleImages/sample2.png'),
        require('../../assets/sampleImages/Tulip.jpg'),
      ]
    const randomIndex = item.id % 5;
    return sampleImages[randomIndex];
}