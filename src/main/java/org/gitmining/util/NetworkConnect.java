package org.gitmining.util;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

import com.google.gson.Gson;


public class NetworkConnect {
	public static Gson gson = new Gson();

	public static String token = "3a9ec067a3989a6fd9cc6d67e9e357541c30a68d";


	public static String getJson(String httpUrl, String httpArg) {
		ByteArrayOutputStream outStream = new ByteArrayOutputStream();
		byte[] data = new byte[1024];
		int len = 0;
		URL url;
		try {
			if (httpUrl.contains("github")) {
				if (httpArg.contains("?"))
					url = new URL(httpUrl + httpArg + "&access_token=" + token);
				else
					url = new URL(httpUrl + httpArg + "?access_token=" + token);
			} else {
				url = new URL(httpUrl + httpArg);
			}

			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			InputStream inStream = conn.getInputStream();
			while ((len = inStream.read(data)) != -1) {
				outStream.write(data, 0, len);
			}
			inStream.close();
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
		} catch (IOException e) {
			// TODO Auto-generated catch block
		}
		return new String(outStream.toByteArray());// 通过out.Stream.toByteArray获取到写的数据;
	}
}
