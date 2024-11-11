import cv2
import numpy as np

# Load the image
image_path = 'ironman.jpg'  # Path to your image file
image = cv2.imread(image_path)

# Check if the image was loaded successfully
if image is None:
    print("Error: Image not found.")
    exit()

# Apply a red filter to the image
def apply_red_filter(img):
    # Create a red filter (BGR format for OpenCV)
    red_filter = np.zeros_like(img)
    red_filter[:, :, 2] = 255  # Set the red channel to 255

    # Blend the original image with the red filter
    blended_image = cv2.addWeighted(img, 0.7, red_filter, 0.3, 0)
    return blended_image

# Apply the filter
filtered_image = apply_red_filter(image)

# Save the output image
output_path = 'ironman_effect.jpg'
cv2.imwrite(output_path, filtered_image)

# Display the original and filtered images
cv2.imshow('Original Image', image)
cv2.imshow('Iron Man Effect', filtered_image)
cv2.waitKey(0)
cv2.destroyAllWindows()
