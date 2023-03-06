%Loading the image
Original_Image=imread('PeppersOG.jpg');

%Displaying the image
figure,imshow(Original_Image);

%Converting the image into a gray image
Gray_Image = rgb2gray(Original_Image);

%Displaying the Gray image
figure,imshow(Gray_Image);

%Red matrix
Red_Matrix = Original_Image(:,:,1);

%Subtract Image: Subtract Gray from Red
Subtracted_Image = imsubtract(Red_Matrix,Gray_Image);

%Displaying the subtracted image : Red
figure,imshow(Subtracted_Image);

%Converting the image into a Binary image
Bin_image  = im2bw(Subtracted_Image,0.21);

%Masking the Red Objects only
Mask  = ~Bin_image;

%Creating a 3 channel masked image
Mask3Channel = cat(3,Mask,Mask,Mask) 

%Creating a backup of the Original image
New_Image = Original_Image;
New_Image(Mask3Channel) = 0;

%Displaying the Backed up Image
figure,imshow(New_Image);

%RED and Green Color Segmentation

%Green matrix
Green_Image = Original_Image(:,:,2);

%Subtract Image: Subtract Gray from Green
Gsubtract_Image = imsubtract(Green_Image,Gray_Image);

%Displaying the subtracted image: Green
figure,imshow(Gsubtract_Image);

%Converting to binary image
Gbin_Image = im2bw(Gsubtract_Image,0.01);

%Displaying the binary image
figure,imshow(Gbin_Image);



