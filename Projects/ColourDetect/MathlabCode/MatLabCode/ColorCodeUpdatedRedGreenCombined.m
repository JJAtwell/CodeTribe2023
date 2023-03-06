%% STEP 1

%Loading the Original Image
Original_Image=imread('PeppersOG.jpg');

%Converting the colour image into a Gray Image
Gray_Image = rgb2gray(Original_Image);
%% STEP 2

%Extracing the Red Space
%Red Matrix
Red_Matrix = Original_Image(:,:,1);

%Subtracting the Gray image from the Red Image
Rsubtract_Image = imsubtract(Red_Matrix,Gray_Image);

%% STEP 3

%Converting the Red subtracted image to binary

%Converting the image into a Binary image
Rbin_Image = im2bw(Rsubtract_Image,0.3);

%Finding the complement of the Red Binary image
RbMask = im2bw(imcomplement(Rbin_Image));

%Creating a 3 channel Red image
RbMask = cat(3,RbMask,RbMask,RbMask);

%Creating a back up of the Original Image
Red_Only_Image = Original_Image;
Red_Only_Image(RbMask)=0;

%Displaying the Original Image 
figure,subplot(2,1,1),imshow(Original_Image),title('original Peppers Image');

%Displaying the Red Only Image
subplot(2,1,2),imshow(Red_Only_Image),title('red objects found');

%% STEP 4

%Displaying the Red Subtracted Image 
figure,imshow(Rsubtract_Image);

%Displaying the Original Image
figure,imshow(Original_Image),title('Original Peppers Image')
%% STEP 5

%Green Matrix
Green_Matrix = Original_Image(:,:,2); 

%Subtracting the Gray image from the Green Image
Gsubtract_Image = imsubtract(Green_Matrix,Gray_Image);

%Displaying the Subtracted Image : Green
figure,imshow(Gsubtract_Image),title('Green Matrix')

%Converting the Green Image into a Binary Image
Gbin_Image = im2bw(Gsubtract_Image,0.01);

%Displaying the Green Binary Image
figure,imshow(Gbin_Image),title('green to binary with 0.01 threshold')

%% STEP 6 

%Masking the Green Objects Only

%Creating a copy of the Original Image
Only_Green_Image = Original_Image;

%Converting the Image into a Binary Image
Only_Green_Mask = im2bw(double(imcomplement(Gbin_Image)));

%Creating a 3 channel Image
Only_Green_Mask = cat(3,Only_Green_Mask,Only_Green_Mask,Only_Green_Mask);
Only_Green_Image(Only_Green_Mask)=0;

%Displaying the Green Only Image
figure,imshow(Only_Green_Image),title('Green Objects Subtracted');

%% STEP 7 
%subtract together

%Creating a back up of the Original Image
Combined_Image = Original_Image;

%Creating a back up of the Original Image
Absolute_Combined_Image = Original_Image;

%Subtracting the Green Binary Image from the Red Binary Image
Combined_Images = imsubtract(Rbin_Image,Gbin_Image);

%Using the absolute function to subract the Green Binary Image from the Red
%Binary Image
Absolute_Combined_Images = abs(imsubtract(Rbin_Image,Gbin_Image));

%% STEP 8

%Applying the Masks

%Mask 1
mk1 = im2bw(imcomplement(Combined_Images));

%Mask 2
mk2 = im2bw(imcomplement(Absolute_Combined_Images));

%Creating a 3 channel image
mk1 = cat(3,mk1,mk1,mk1);mk2=cat(3,mk2,mk2,mk2);
Combined_Image(mk1)=0;Absolute_Combined_Image(mk2)=0;

%% STEP 9

%Plotting the results
figure,subplot(2,2,1),imshow(Combined_Images); title('without abs')
subplot(2,2,2),imshow(Absolute_Combined_Images),title('with abs')
subplot(2,2,3),imshow(Combined_Image),title('without abs x')
subplot(2,2,4),imshow(Absolute_Combined_Image),title('with abs x')